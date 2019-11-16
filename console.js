class Console
{
    constructor( html_element )
    {
        this.element = html_element;
    }
    
    log( text, color='#fff' ){
        this.element.innerHTML+=`<span style="color:${color}">${text}</span><br>`;
        this.element.scrollTop = this.element.scrollHeight;
    }
    
    error( text ){
        this.log( text,'red' );
    }
}