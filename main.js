$(document).ready(function(){
    var leaves = 0;
    var ants = 0;
    var leavesPlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var logPrice = 1;
    var menu;

    $("#collect_leaf").click(function(){
        leaves += leavesPlus;
        changeInventory();
        //changeMarket();
    });

    function changeInventory(){
        $("#colony_size").html("Colony size: " + ants);

        if(leaves == 1){
            $("#leaves").html("Leaf: " + leaves);
        }else{
            $("#leaves").html("Leaves: " + leaves);
        }
        
    }
});