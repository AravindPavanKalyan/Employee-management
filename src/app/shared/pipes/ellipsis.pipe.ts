import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis' // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  transform(text: string, length?: number): string {

    if (text && length) {
      let truncated: string = text.substring(0, length).trim() + '...';
      return truncated;
    }
    if (text){
      return text;
    } else
      return 'Inalid or empty value';
  }

}
