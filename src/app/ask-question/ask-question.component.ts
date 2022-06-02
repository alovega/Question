import { Component, OnInit } from '@angular/core';
import { MdEditorOption, UploadResult } from 'ngx-markdown-editor';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})

export class AskQuestionComponent implements OnInit {
  items: any = []
  htmlContent: String
  mode: string = "editor";
  public options: MdEditorOption = {
    showPreviewPanel: false,
    enablePreviewContentClick: false,
    resizable: true,
    customRender: {
      image: function(href: string, title: string, text: string) {
        let out = `<img style="max-width: 100%; border: 20px solid red;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (<any>this.options).xhtml ? "/>" : ">";
        return out;
      }
    }
  };
  constructor() {
    this.preRender = this.preRender.bind(this);
    this.postRender = this.postRender.bind(this);
   }

  ngOnInit(): void {
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    // do upload file by yourself
    return Promise.resolve([{ name: 'xxx', url: 'xxx.png', isImg: true }]);
  }

  togglePreviewPanel() {
    this.options.showPreviewPanel = !this.options.showPreviewPanel;
    this.options = Object.assign({}, this.options);
  }

  onPreviewDomChanged(dom: HTMLElement) {
    console.log(dom);
    console.log(dom.innerHTML);
  }

  postRender(html) {
    console.log(`postRender fired`);
    // return '<h1>Test</h1>';
    return html;
  }

  preRender(mdContent) {
    console.log(`preRender fired`);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(mdContent);
    //   }, 4000);
    // })
    return mdContent;
  }

  onEditorLoaded(editor) {
    console.log(`ACE Editor Ins: `, editor);
    // editor.setOption('showLineNumbers', false);

    // setTimeout(() => {
    //   editor.setOption('showLineNumbers', true);
    // }, 2000);
  }

}
