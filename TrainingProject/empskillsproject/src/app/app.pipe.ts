import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by ptd4w10 on 28/09/2017.
 */

@Pipe({name: 'reverseText'})
export class ReversePipe implements PipeTransform {
  transform(value:string): string {
    return value.split("").reverse().join();
  }
}
