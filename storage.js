class StorageManager
{
    constructor( html_element, interpreter ){
        this.element = html_element;
        this.interpreter = interpreter;
        this.amount = 0;
    }
    
    addStorageCells = ( amount = 1 ) => {
        while( amount --> 0 ){
            let cell = "\n<tr>\n    <td>"+ (this.interpreter.pointer==this.amount?">":"") +
                "</td>\n    <td>"+ this.amount +
                "</td>\n    <td><input type=\"number\" placeholder=\"0\" id=\"storage"+ (this.amount++) +
                "\"/></td>\n</tr>";
            this.element.innerHTML += cell;
        }
    }
}