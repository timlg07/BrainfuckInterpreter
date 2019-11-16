var $brain;

function main(){
    $brain = new FuckingInterpreter({
        input  : document.querySelector( "#input" ),
        storage: document.querySelector( "#storage > tbody" ),
        pointer: document.querySelector( "#pointer" ),
        output : document.querySelector( "#output" )
    });
    $brain.storage.addStorageCells(21);
}


window.addEventListener( "load",main );