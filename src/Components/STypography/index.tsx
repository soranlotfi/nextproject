import React, {forwardRef} from "react";
import {ISTypography} from "@/Types/MUI/Components/STypography.types";
import STypographyRoot from "./STypographyRoot";

const STypography = forwardRef<HTMLParagraphElement, ISTypography>(
   (
      {
          englishText,
          boxtitle,
          boxname,
          color,
          fontWeight,
          fontFamily,
          fontSize,
          lineHeight,
          letterSpacing,
          Indent,
          transform,
          textAlign,
          yellowText,
          blueText,
          sx,
          children,
          ...rest
      },
      ref
   ) => {
       return (
          <STypographyRoot
             ref={ref}
             sx={sx}

             customstats={{
                 boxtitle,
                 boxname,
                 yellowText,
                 blueText,
                 fontWeight,
                 fontFamily,
                 fontSize,
                 lineHeight,
                 letterSpacing,
                 Indent,
                 color,
                 transform,
                 textAlign,
                 englishText,
                 ...rest,
             }}
          >
              {children}
          </STypographyRoot>
       );
   }
);

STypography.displayName="STypography";
export default STypography;