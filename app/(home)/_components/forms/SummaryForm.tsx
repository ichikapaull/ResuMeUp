"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useResumeContext } from "@/context/resume-info-provider";
import useUpdateDocument from "@/features/document/use-update-document";
import { toast } from "@/hooks/use-toast";
import { AIChatSession } from "@/lib/google-ai-model";
import { generateThumbnail } from "@/lib/helper";
import { ResumeDataType } from "@/types/resume.type";
import { Loader, Sparkles } from "lucide-react";
import React, { useCallback, useState } from "react";

interface GeneratesSummaryType {
  fresher: string;
  mid: string;
  experienced: string;
}

const prompt = `Create 3 professional resume summaries for a {jobTitle} position:

Return ONLY a JSON object in this exact format:
{
  "fresher": "A 3-line summary for entry-level candidates with 0-2 years experience",
  "mid": "A 3-line summary for mid-level professionals with 3-5 years experience",
  "experienced": "A 3-line summary for senior professionals with 6+ years experience"
}

Requirements:
- Each summary must be exactly 3 lines
- Use first person ("I am", "I have")  
- Include relevant technologies and skills for {jobTitle}
- Be specific and professional
- No placeholders or brackets`;

const SummaryForm = (props: { handleNext: () => void }) => {
  const { handleNext } = props;
  const { resumeInfo, onUpdate } = useResumeContext();

  const { mutateAsync, isPending } = useUpdateDocument();

  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummary, setAiGeneratedSummary] =
    useState<GeneratesSummaryType | null>(null);

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const resumeDataInfo = resumeInfo as ResumeDataType;
    const updatedInfo = {
      ...resumeDataInfo,
      summary: value,
    };
    onUpdate(updatedInfo);
  };

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (!resumeInfo) return;
      const thumbnail = await generateThumbnail();
      const currentNo = resumeInfo?.currentPosition
        ? resumeInfo?.currentPosition + 1
        : 1;

      await mutateAsync(
        {
          currentPosition: currentNo,
          thumbnail: thumbnail,
          summary: resumeInfo?.summary,
        },
        {
          onSuccess: () => {
            toast({
              title: "Success",
              description: "Summary updated successfully",
            });
            handleNext();
          },
          onError() {
            toast({
              title: "Error",
              description: "Failed to update summary",
              variant: "destructive",
            });
          },
        }
      );
    },
    [resumeInfo]
  );

  const GenerateSummaryFromAI = async () => {
    try {
      const jobTitle = resumeInfo?.personalInfo?.jobTitle;
      if (!jobTitle) {
        toast({
          title: "Missing Information",
          description: "Please add a job title first",
          variant: "destructive",
        });
        return;
      }
      
      console.log("🤖 Starting AI generation for job title:", jobTitle);
      setLoading(true);
      
      const PROMPT = prompt.replace(/\{jobTitle\}/g, jobTitle);
      console.log("📝 Sending prompt:", PROMPT);
      
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
      console.log("🤖 AI Raw Response:", responseText);
      
      // Clean and parse the response
      let cleanedResponse = responseText.trim();
      
      // Remove code block markers if present
      if (cleanedResponse.startsWith('```json')) {
        cleanedResponse = cleanedResponse.replace(/```json\n?/, '').replace(/\n?```$/, '');
      } else if (cleanedResponse.startsWith('```')) {
        cleanedResponse = cleanedResponse.replace(/```\n?/, '').replace(/\n?```$/, '');
      }
      
      console.log("🧹 Cleaned Response:", cleanedResponse);
      
      const parsedResponse = JSON.parse(cleanedResponse);
      console.log("✅ Parsed Response:", parsedResponse);
      
      // Validate the response structure
      if (parsedResponse && typeof parsedResponse === 'object' && 
          (parsedResponse.fresher || parsedResponse.mid || parsedResponse.experienced)) {
        setAiGeneratedSummary(parsedResponse);
        toast({
          title: "Success",
          description: "AI suggestions generated successfully!",
        });
      } else {
        throw new Error("Invalid response format - missing required fields");
      }
    } catch (error) {
      console.error("💥 AI Generation Error:", error);
      toast({
        title: "Failed to generate summary",
        description: error instanceof Error ? error.message : "Please try again or write your summary manually.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = useCallback(
    (summary: string) => {
      if (!resumeInfo) return;
      const resumeDataInfo = resumeInfo as ResumeDataType;
      const updatedInfo = {
        ...resumeDataInfo,
        summary: summary,
      };
      onUpdate(updatedInfo);
      setAiGeneratedSummary(null);
    },
    [onUpdate, resumeInfo]
  );

  return (
    <div>
      <div className="w-full">
        <h2 className="font-bold text-lg">Summary</h2>
        <p className="text-sm">Add summary for your resume</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-end justify-between">
            <Label>Add Summary</Label>
            <Button
              variant="outline"
              type="button"
              className="gap-1"
              disabled={loading || isPending}
              onClick={() => GenerateSummaryFromAI()}
            >
              <Sparkles size="15px" className="text-purple-500" />
              Generate with AI
            </Button>
          </div>
          <Textarea
            className="mt-5 min-h-36"
            required
            value={resumeInfo?.summary || ""}
            onChange={handleChange}
          />

          {aiGeneratedSummary && typeof aiGeneratedSummary === 'object' && (
            <div>
              <h5 className="font-semibold text-[15px] my-4">Suggestions</h5>
              {Object.entries(aiGeneratedSummary).map(
                ([experienceType, summary], index) => {
                  // Ensure summary is a string
                  const summaryText = typeof summary === 'string' ? summary : JSON.stringify(summary);
                  
                  return (
                    <Card
                      role="button"
                      key={index}
                      className="my-4 bg-primary/5 shadow-none
                              border-primary/30
                            "
                      onClick={() => handleSelect(summaryText)}
                    >
                      <CardHeader className="py-2">
                        <CardTitle className="font-semibold text-md">
                          {experienceType?.charAt(0)?.toUpperCase() +
                            experienceType?.slice(1)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>{summaryText}</p>
                      </CardContent>
                    </Card>
                  );
                }
              )}
            </div>
          )}

          <Button
            className="mt-4"
            type="submit"
            disabled={
              isPending || loading || resumeInfo?.status === "archived"
                ? true
                : false
            }
          >
            {isPending && <Loader size="15px" className="animate-spin" />}
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SummaryForm;
