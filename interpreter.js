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
    
}