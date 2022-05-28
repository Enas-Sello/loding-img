



let marble = Array.from( document.querySelectorAll( '.gray' ) )

let liner = document.getElementById( 'liner' );

let next = document.getElementById( 'click' )

let currentMarble = 0;
let slidercount = marble.length
console.log( slidercount-1 +" marble.length" )

    //slide
    let interval = setInterval( function ()
    {
        if ( next.classList.contains( 'active' ) )
        {
            return false
        }
        else
        {
            currentMarble++;
            check( console.log( currentMarble + " currentMarble" ) )
        }
        stop( console.log( "clear intervsl" ) )
    
        //clear on hover
        liner.onmouseenter = clear;
        function clear()
        {
            clearInterval( interval )
        }
    }, 1000 )

//clear intervel 
    function stop()
    {
        if ( currentMarble == slidercount - 1 )
        {
            clearInterval( interval ),
                currentMarble = 5;
            check();
        }
    }

    //ckeck class list
    function check()
    {
        //remove
        function remove()
        {
            marble.forEach( function ( orange )
            {
                orange.classList.remove( 'active' )
            } )
        }
        remove( console.log( 'clear' ) )
        //add
        marble[ currentMarble ].classList.add( 'active' )
    }


