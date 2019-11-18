class FuckingInterpreter 
{
    
    // @param {Object} HTML-elements used by the FuckingInterpreter to fuck your brain
    constructor({ input, storage, pointer, console })
    {
        this._pointer = {
            value: 0,
            element: pointer
        }
        this.storage = new StorageManager( storage, this );
        this.console = new Console( console );
    }
    
    get pointer(){
        return this._pointer.value;
    }
    set pointer( n ){
        if( n < 0 ){
            this.console.error("Pointer cannot be negative.");
            return;
        } else if( n >= this.storage.amount ){
            this.storage.addStorageCells( n - (this.storage.amount-1) );
            this.console.log("Storage size increased.");
        }
        
        let set_ptr =(_="")=> this.storage.element.querySelector("tr:nth-child("+(this._pointer.value+2)+") td:first-child").innerHTML=_;
        
        set_ptr();
        this._pointer.value = n;
        set_ptr(">");
        
        this._pointer.element.innerText = this._pointer.value;
    }
    
    
    
}