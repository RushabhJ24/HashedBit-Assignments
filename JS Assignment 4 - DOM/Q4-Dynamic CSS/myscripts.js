document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text-container");
    const colorBox = document.getElementById("colorbox");
    const colorChangeBtn = document.getElementById("colorchange");
    const fontSizeRange = document.getElementById("fontsize");
    const italicBtn = document.getElementById("italic");
    const underlineBtn = document.getElementById("underline");
    const boldBtn = document.getElementById("bold");
    const fontFamilySelect = document.getElementById("list");
    const getStyleBtn = document.getElementById("getstyle");
    const cssPropsParagraph = document.getElementById("css-props");

    colorChangeBtn.addEventListener("click", function() {
        textContainer.style.color = colorBox.value;
    });

    fontSizeRange.addEventListener("input", function() {
        textContainer.style.fontSize = fontSizeRange.value + "px";
    });

    italicBtn.addEventListener("click", function() {
        textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
    });

    underlineBtn.addEventListener("click", function() {
        textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
    });

    boldBtn.addEventListener("click", function() {
        textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
    });

    fontFamilySelect.addEventListener("change", function() {
        textContainer.style.fontFamily = fontFamilySelect.value;
    });

    getStyleBtn.addEventListener("click", function() {
        const cssProps = {
            "color": textContainer.style.color,
            "font-size": textContainer.style.fontSize,
            "font-family": textContainer.style.fontFamily,
            "font-style": textContainer.style.fontStyle,
            "font-weight": textContainer.style.fontWeight,
            "text-decoration": textContainer.style.textDecoration
        };

        let cssPropsStr = "";
        for (const prop in cssProps) {
            if (cssProps[prop]) {
                cssPropsStr += `${prop}: ${cssProps[prop]}; `;
            }
        }

        cssPropsParagraph.textContent = cssPropsStr;
    });
});
