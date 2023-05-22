import { Component, OnInit } from '@angular/core';
import { FileTransfer,FileTransferObject} from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file';
import { FileOpener } from '@capacitor-community/file-opener';





@Component({
  selector: 'app-file-transfer',
  templateUrl: './file-transfer.page.html',
  styleUrls: ['./file-transfer.page.scss'],
})
export class FileTransferPage implements OnInit {
  fileTransfer:FileTransferObject

  constructor(
    private transfer:FileTransfer,
    ) {}

    
    downloade(){
      console.log('function called')
      this.fileTransfer=this.transfer.create();
      const url='https://alpha.navituscorporate.com/uploads/pdf/1675187496-plyiz09-Aug-2022-11-27-59_agreement-1.pdf';
      this.fileTransfer.download(url,File.dataDirectory+'file.pdf').then((entry)=>{
        this.openFile(entry.nativeURL)
        console.log('download complete:',entry.nativeURL)
      }).catch((err)=>{
        console.log('error in downloding',err)
      })
    }
    async openFile(path){
      return FileOpener.open({filePath:path,contentType:'application/pdf',openWithDefault:true}).then((sucess)=>{
        console.log('open file',sucess)
      }).catch((err)=>{
        console.log('file cnt open',err)
      })
    }
 
     

  ngOnInit() {
  }

}
