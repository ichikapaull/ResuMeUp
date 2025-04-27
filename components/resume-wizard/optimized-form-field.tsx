"use client"

import { memo } from "react"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Create memoized form fields to prevent unnecessary re-renders
const OptimizedFormField = memo(
  ({ control, name, label, description, placeholder, type = "text", onChange, ...props }) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  if (onChange) {
                    onChange(e, field)
                  }
                }}
                {...props}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    )
  },
  (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    return (
      prevProps.name === nextProps.name &&
      prevProps.placeholder === nextProps.placeholder &&
      prevProps.type === nextProps.type
    )
  },
)

OptimizedFormField.displayName = "OptimizedFormField"

export default OptimizedFormField
