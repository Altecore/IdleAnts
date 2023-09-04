/* sera exécuté une fois la page loadée*/
$(document).ready(function(){
    /*Toutes les variables*/
        var sticks = 0;
        var leavesToSticksRatio = 10;
        var sticksPlus = 1;

        var leaves = 0;
        var leavesPlus = 1;

        var ants = 0;
        var leavesToAntsRatio = 25;
        var antsPlus = 1;

        var larvae = 0;
        var leavesToLarvaeRatio = 10;
        var larvaePlus = 1;

        var stones = 0;
        var leavesToStonesRatio = 25;
        var stonesPlus = 1;

        var menutop;
        var menubottom;

                /*TOUTES LES FONCTIONS DES BOUTONS*/
        /*lorsqu'on clique sur le bouton ayant l'ID "colony_button"*/
            $("#colony_button").click(function(){
                menutop = switchMenuDivTopRight("colony_menu");
            });

                /*Switch menu pour le colony menu*/
                function switchMenuDivTopRight(menutop){
                    $(".right_divider_top").children().css("display", "none");
                    $("." + menutop).css("display", "block");
                    return menutop;}

                    /*Close le menu de colony*/
                    $("#close_colony_menu_buttons").click(function(){
                        $(".colony_menu").css("display", "none");
                    });

        /*lorsqu'on clique sur le bouton ayant l'ID "settings_button"*/
            $("#settings_button").click(function(){
                menutop = switchMenuDivTopRight("settings_menu");
            });

                    /*Close le menu de settings*/
                    $("#close_settings_menu_buttons").click(function(){
                        $(".settings_menu").css("display", "none");
                    });


        /*lorsqu'on clique sur le bouton ayant l'ID "expeditions_button"*/
            $("#expeditions_button").click(function(){
                menubottom = switchMenuDivBotRight("expeditions_menu");
            });

                /*Switch menu pour le expeditions menu*/
                function switchMenuDivBotRight(menubottom){
                    $(".right_divider_bottom").children().css("display", "none");
                    $("." + menubottom).css("display", "block");
                    return menubottom;}

                    /*Close le menu expeditions*/
                    $("#close_expeditions_menu_buttons").click(function(){
                        $(".expeditions_menu").css("display", "none");
                    });

        /*lorsqu'on clique sur le bouton ayant l'ID "achievements_button"*/
        $("#achievements_button").click(function(){
            menubottom = switchMenuDivBotRight("achievements_menu");
        });

                /*Close le menu achievements*/
                $("#close_achievements_menu_buttons").click(function(){
                    $(".achievements_menu").css("display", "none");
                });

        /*lorsqu'on clique sur le bouton ayant l'ID "spawn_larvae_button"*/
            $("#spawn_larvae_button").click(function(){
                if(leaves >= leavesToLarvaeRatio){
                    leaves -= leavesToLarvaeRatio;
                    larvae += larvaePlus;
                    updateColony();
                    updateInventory();
                }
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "feed_larvae_button"*/
            $("#feed_larvae_button").click(function(){
                if(leaves >= leavesToAntsRatio){
                    if(larvae >= 1){
                        leaves -= leavesToAntsRatio;
                        larvae -= 1;
                        ants += antsPlus;
                        updateColony();
                        updateInventory();
                    }
                }
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "collect_leaf_button"*/
            $("#collect_leaf_button").click(function(){
                leaves += leavesPlus;
                updateInventory();
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "stick_expedition_button"*/
            $("#stick_expedition_button").click(function(){
                if(leaves >= leavesToSticksRatio){
                    leaves -= leavesToSticksRatio;
                    sticks += sticksPlus;
                    updateColony();
                    updateInventory();
                }
            });

        /*lorsqu'on clique sur le bouton ayant l'ID "stone_expedition_button"*/
            $("#stone_expedition_button").click(function(){
                if(leaves >= leavesToStonesRatio){
                    leaves -= leavesToStonesRatio;
                    stones += stonesPlus;
                    updateColony();
                    updateInventory();
                }
            });

        /*Fonctions d'update*/
            /*Update la colony*/
                function updateColony(){
                    if(larvae <= 1){
                        $("#larvae_text").html("You currently have " + larvae + " larva");
                    } else{
                        $("#larvae_text").html("You currently have " + larvae + " larvae");
                    }
                    if(ants <= 1){
                        $("#ant_text").html("You currently have " + ants + " ant");
                    } else{
                        $("#ant_text").html("You currently have " + ants + " ants");
                    }
                }
            
            /*Update l'inventaire après un achat*/
                function updateInventory(){
                    if(leaves <= 1){
                        $("#leaf_text").html("You currently have " + leaves + " leaf");
                    } else{
                        $("#leaf_text").html("You currently have " + leaves + " leaves");
                    }
                    if(sticks <= 1){
                        $("#stick_text").html("You currently have " + sticks + " stick");
                    } else{
                        $("#stick_text").html("You currently have " + sticks + " sticks");
                    }
                    if(stones <= 1){
                        $("#stone_text").html("You currently have " + stones + " stone");
                    } else{
                        $("#stone_text").html("You currently have " + stones + " stones");
                    }
                }
});