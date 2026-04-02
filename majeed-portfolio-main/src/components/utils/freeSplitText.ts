/**
 * A simple free alternative to GSAP SplitText.
 * Splits text into characters, words, or lines.
 */

export class FreeSplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  
  constructor(target: string | HTMLElement | (string | HTMLElement)[], vars: { type?: string, linesClass?: string } = {}) {
    let targets: HTMLElement[] = [];
    if (typeof target === "string") {
      targets = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      target.forEach(t => {
        if (typeof t === "string") {
          targets = targets.concat(Array.from(document.querySelectorAll(t)));
        } else {
          targets.push(t);
        }
      });
    } else {
      targets = [target];
    }

    this.elements = targets;
    const types = vars.type || "chars,words,lines";
    
    targets.forEach(el => {
      const text = el.innerText;
      el.innerHTML = ""; // Clear
      
      const words = text.split(/\s+/);
      words.forEach((word, wordIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.className = "split-word";
        
        if (types.includes("chars")) {
          word.split("").forEach(char => {
            const charSpan = document.createElement("span");
            charSpan.style.display = "inline-block";
            charSpan.className = "split-char";
            charSpan.innerText = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.innerText = word;
        }
        
        this.words.push(wordSpan);
        el.appendChild(wordSpan);
        
        if (wordIdx < words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });

      if (types.includes("lines")) {
        // Line splitting is complex without a real layout engine.
        // For simple cases, we can group elements by their offsetTop.
        // But for many animations, just words/chars is enough.
        // We'll mark them as split-line for compatibility if possible.
        el.classList.add(vars.linesClass || "split-line");
      }
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
