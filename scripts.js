/* sera exécuté une fois la page loadée*/
$(document).ready(function(){
    /*Toutes les variables*/
        var leaves = 0;
        var ants = 0;
        var leavesPlus = 1;
        var autoLogPlus = 0;
        var menutop
        var menubottom

                /*TOUTES LES FONCTIONS DES BOUTONS*/
        /*lorsqu'on clique sur le bouton ayant l'ID "colony_button"*/
            $("#colony_button").click(function(){
                menutop = switchMenu("colony_menu");
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "expeditions_button"*/
            $("#expeditions_button").click(function(){
                menubottom = switchMenu("expedition_menu");
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "expeditions_button"*/
            $("#settings_button").click(function(){
                menutop = switchMenu("settings_menu");
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "spawn_larvae_button"*/
            $("#spawn_larvae_button").click(function(){
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "feed_larvae_button"*/
            $("#feed_larvae_button").click(function(){
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "collect_leaf_button"*/
            $("#collect_leaf_button").click(function(){
                leaves += leavesPlus;
                changeInventory();
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "stick_expedition_button"*/
            $("#stick_expedition_button").click(function(){
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "stone_expedition_button"*/
            $("#stone_expedition_button").click(function(){
            });

                /*TOUTES LES AUTRES FONCTIONS*/
        /*Change l'inventaire des leaves après #collect_leaves_button*/
            function changeInventory(){
                if(leaves == 1){
                    $("#leaf_text").html("You currently have " + leaves + " leaf");
                } else{
                    $("#leaf_text").html("You currently have " + leaves + " leaves");
                }
            }

        /*Switch Menu pour le colony menu*/
            function switchMenu(menutop){
                $(".right_divider_top").children().css("display", "none");
                $("." + menutop).css("display", "block");
                return menutop;
            }

        /*Switch Menu pour le settings menu*/
            function switchMenu(menutop){
                $(".right_divider_top").children().css("display", "none");
                $("." + menusettings).css("display", "block");
                return menusettings;
            }

        /*Switch Menu pour le expedition menu*/
            function switchMenu(menubottom){
                $("right_divider_bottom").children().css("display", "none");
                $("." + menubottom).css("display", "block");
                return menubottom;
            }
});