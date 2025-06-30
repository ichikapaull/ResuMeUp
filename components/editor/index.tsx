import React, { useState } from "react";
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
} from "react-simple-wysiwyg";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Loader, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AIChatSession } from "@/lib/google-ai-model";

const PROMPT = `Given the job title "{jobTitle}",
 create 6-7 concise and personal bullet points in
  HTML stringify format that highlight my key
  skills, relevant technologies, and significant
   contributions in that role. Do not include
    the job title itself in the output. Provide
     only the bullet points inside an unordered
     list.`;

const RichTextEditor = (props: {
  jobTitle: string | null;
  initialValue: string;
  onEditorChange: (e: any) => void;
}) => {
  const { jobTitle, initialValue, onEditorChange } = props;

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue || "");

  const GenerateSummaryFromAI = async () => {
    try {
      if (!jobTitle) {
        toast({
          title: "Must provide Job Position",
          variant: "destructive",
        });
        return;
      }
      setLoading(true);
      const prompt = PROMPT.replace("{jobTitle}", jobTitle);
      const result = await AIChatSession.sendMessage(prompt);
      const responseText = await result.response.text();
      console.log("AI Response:", responseText);
      
      // Clean the response text - remove any markdown formatting
      let cleanedResponse = responseText.trim();
      
      // Remove code block markers if present
      if (cleanedResponse.startsWith('```html')) {
        cleanedResponse = cleanedResponse.replace(/```html\n?/, '').replace(/\n?```$/, '');
      } else if (cleanedResponse.startsWith('```')) {
        cleanedResponse = cleanedResponse.replace(/```\n?/, '').replace(/\n?```$/, '');
      }
      
      // If the response is already HTML, use it directly
      if (cleanedResponse.includes('<ul>') || cleanedResponse.includes('<li>')) {
        setValue(cleanedResponse);
        onEditorChange(cleanedResponse);
      } else {
        // Try to parse as JSON if it looks like JSON
        try {
          const validJsonArray = JSON.parse(`[${cleanedResponse}]`);
          const htmlContent = validJsonArray?.[0] || cleanedResponse;
          setValue(htmlContent);
          onEditorChange(htmlContent);
        } catch (parseError) {
          // If JSON parsing fails, use the cleaned response directly
          setValue(cleanedResponse);
          onEditorChange(cleanedResponse);
        }
      }
    } catch (error) {
      console.error("AI Generation Error:", error);
      toast({
        title: "Failed to generate summary",
        description: "Please try again or write your experience manually.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="flex items-center 
      justify-between my-2"
      >
        <Label>Work Summary</Label>
        <Button
          variant="outline"
          type="button"
          className="gap-1"
          disabled={loading}
          onClick={() => GenerateSummaryFromAI()}
        >
          <>
            <Sparkles size="15px" className="text-purple-500" />
            Generate with AI
          </>
          {loading && <Loader size="13px" className="animate-spin" />}
        </Button>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          containerProps={{
            style: {
              resize: "vertical",
              lineHeight: 1.2,
              fontSize: "13.5px",
            },
          }}
          onChange={(e) => {
            setValue(e.target.value);
            onEditorChange(e.target.value);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
