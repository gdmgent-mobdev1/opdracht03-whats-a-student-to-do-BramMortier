// ------------------------------------------- //
// module imports
import { markdownContent, markdownPreview } from "./constants";
// ------------------------------------------- //

const sampleText = `
# Title
## Subheading
this is some **random** text.

* list item
* another list item
* last item

more text

* apples
* bananas

* desktop
* keyboard
* mouse

1 Bram
2 Sander
3 Jasper

'''javascript
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        displayHeader(false);
    } else {
        displayHeader(true);
    }
    lastScrollTop = scrollTop;
});
'''
`;

export const parseMarkdown = (markdown: string): string => {
    let result = markdown
        .replace(/^# (.*)/gm, `<h4 class="md__heading mb-xs">$1</h4>`)
        .replace(/^## (.*)/gm, `<h5 class="md__subheading mb-xs">$1</h5>`)
        .replace(/\*\*(.*)\*\*/gim, `<b class="bold">$1</b>`)

        .replace(/[\']{3}(.*)([^\`]+)[\']{3}/g, `<pre><code class="$1">$2</code></pre>`)

        .replace(/^[0-9] (.*)/gm, `<li class="md__ol-item">$1</li>`)
        .replace(/(<li class="md__ol-item">.*<\/li>\n?)+/g, `<ol class="md__ol">\n$&</ol>\n`)

        .replace(/^\* (.*)/gm, `<li class="md__ul-item">$1</li>`)
        .replace(/(<li class="md__ul-item">.*<\/li>\n?)+/g, `<ul class="md__ul">\n$&</ul>\n`);

    return result.trim();
};

export const previewMarkdown = (markdown: string): void => {
    markdownPreview.innerHTML = parseMarkdown(markdown);
};

export const togglePreview = (): void => {
    previewMarkdown(markdownContent.value);
    markdownContent.classList.toggle("new-note__markdown-content--active");
    markdownPreview.classList.toggle("new-note__markdown-preview--active");
};

export const insertHeading = (): void => {
    markdownContent.value += `# Title\n`;
};

export const insertSubtitle = (): void => {
    markdownContent.value += `## Subtitle\n`;
};

export const insertList = (): void => {
    markdownContent.value += `* list item\n* list item\n* list item\n`;
};

export const insertCode = (): void => {
    markdownContent.value += `'''language\nplace your code\n'''\n
    `;
};

parseMarkdown(sampleText);
