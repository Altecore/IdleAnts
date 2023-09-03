/* sera exécuté une fois la page loadée*/
$(document).ready(function(){
    var leaves = 0;
    var ants = 0;
    var leavesPlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var logPrice = 1;
    var menu;
    /*lorsqu'on clique sur le bouton ayant l'ID "collect_leaf"*/
    $("#collect_leaf").click(function(){
        leaves += leavesPlus;
        changeInventory();
        //changeMarket();
    });

    $("#visit").click(function(){
        menu = switchMenu("marketplace");
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });
    /*Fonction qui update l'inventaire après un achat*/
    function changeInventory(){
        $("#colony_size").html("Colony size: " + ants);

        if(leaves == 1){
            $("#leaves").html("Leaf: " + leaves);
        }else{
            $("#leaves").html("Leaves: " + leaves);
        }
        
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});