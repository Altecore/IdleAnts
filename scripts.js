/* sera exécuté une fois la page loadée*/
$(document).ready(function(){
    /*Quand on ajoute une nouvelle variable, il faut l'ajouter:
        Dans les variables (toutes celles nécessaires, dont celles pour les statistiques)
        Dans les fonctions de ses boutons
        Dans le updateInventory/updateColony
        Dans le updateAchievements*/
    /*Toutes les variables pour jouer*/
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

    /*Toutes les variables pour les statistiques*/
        var leavesStats= 0;
        var sticksStats = 0;
        var stonesStats = 0;
        var larvaeStats = 0;
        var antsStats = 0;

                /*TOUTES LES FONCTIONS DES BOUTONS*/
    /*Boutons de switch menu du RIGHT DIVIDER TOP*/
        /*Switch menu pour le divider top*/
            function switchMenuDivTopRight(menutop){
                $(".right_divider_top").children().css("display", "none");
                $("." + menutop).css("display", "block");
                return menutop;}
        /*lorsqu'on clique sur le bouton ayant l'ID "colony_button"*/
            $("#colony_button").click(function(){
                menutop = switchMenuDivTopRight("colony_menu");
            });
                /*Close le menu de colony*/
                $("#close_colony_menu_buttons").click(function(){
                    $(".colony_menu").css("display", "none");
                });
        /*lorsqu'on clique sur le bouton ayant l'ID "settings_button"*/
            $("#settings_button").click(function(){
                menutop = switchMenuDivTopRight("settings_menu");
            });
                /*Close le menu de settings*/
                $("#close_settings_menu_button").click(function(){
                    $(".settings_menu").css("display", "none");
                });
        /*lorsqu'on clique sur le bouton ayant l'ID "statistics_button"*/
        $("#statistics_button").click(function(){
            menutop = switchMenuDivTopRight("statistics_menu");
        });
            /*Close le menu de statistics*/
            $("#close_statistics_menu_button").click(function(){
                $(".statistics_menu").css("display", "none");
            });        

    /*Boutons de switch menu du DIVIDER BOTTOM*/
                /*Switch menu pour le divider bottom*/
                function switchMenuDivBotRight(menubottom){
                    $(".right_divider_bottom").children().css("display", "none");
                    $("." + menubottom).css("display", "block");
                    return menubottom;}
        /*lorsqu'on clique sur le bouton ayant l'ID "expeditions_button"*/
            $("#expeditions_button").click(function(){
                menubottom = switchMenuDivBotRight("expeditions_menu");
            });
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

    /*FONCTIONS DES BOUTONS QUI DONNENT DES ITEMS*/
        /*lorsqu'on clique sur le bouton ayant l'ID "spawn_larvae_button"*/
            $("#spawn_larvae_button").click(function(){
                if(leaves >= leavesToLarvaeRatio){
                    leaves -= leavesToLarvaeRatio;
                    larvae += larvaePlus;
                    larvaeStats += larvaePlus;
                    updateColony();
                    updateInventory();
                    updateStatistics();
                }
            });
        /*lorsqu'on clique sur le bouton ayant l'ID "feed_larvae_button"*/
            $("#feed_larvae_button").click(function(){
                if(leaves >= leavesToAntsRatio){
                    if(larvae >= 1){
                        leaves -= leavesToAntsRatio;
                        larvae -= 1;
                        ants += antsPlus;
                        antsStats += antsPlus;
                        updateColony();
                        updateInventory();
                        updateStatistics();
                    }
                }
            });
        /*lorsqu'on clique sur le bouton ayant l'ID "collect_leaf_button"*/
            $("#collect_leaf_button").click(function(){
                leaves += leavesPlus;
                leavesStats += leavesPlus;
                updateInventory();
                updateStatistics();
            });
        /*lorsqu'on clique sur le bouton ayant l'ID "stick_expedition_button"*/
            $("#stick_expedition_button").click(function(){
                if(leaves >= leavesToSticksRatio){
                    leaves -= leavesToSticksRatio;
                    sticks += sticksPlus;
                    sticksStats += sticksPlus;
                    updateInventory();
                    updateColony();
                    updateStatistics();
                }
            });
        /*lorsqu'on clique sur le bouton ayant l'ID "stone_expedition_button"*/
            $("#stone_expedition_button").click(function(){
                if(leaves >= leavesToStonesRatio){
                    leaves -= leavesToStonesRatio;
                    stones += stonesPlus;
                    stonesStats += stonesPlus;
                    updateInventory();
                    updateColony();
                    updateStatistics();
                }
            });

    /*FONCTIONS D'UPDATE*/
        /*Update la colony*/
            function updateColony(){
                /*Larvae part du update colony*/
                if(larvae == 0){
                    $("#larvae_text").html("You currently have " + larvae + " larvae");
                } else{
                if(larvae <= 1){
                    $("#larvae_text").html("You currently have " + larvae + " larva");
                } else{
                    $("#larvae_text").html("You currently have " + larvae + " larvae");
                }    
                }
                    
                /*Ants part du update colony*/
                if(ants == 0){
                    $("#ant_text").html("You currently have " + ants + " ants");
                } else{
                if(ants <= 1){
                    $("#ant_text").html("You currently have " + ants + " ant");
                } else{
                    $("#ant_text").html("You currently have " + ants + " ants");
                }    
                }
            }
            
        /*Update l'inventaire*/
            function updateInventory(){
                /*Partie leaves du update inventory*/
                if(leaves == 0){
                    $("#leaf_text").html("You currently have " + leaves + " leaves");
                } else{
                if(leaves <= 1){
                    $("#leaf_text").html("You currently have " + leaves + " leaf");
                } else{
                    $("#leaf_text").html("You currently have " + leaves + " leaves");
                }    
                }

                /*Partie sticks du update inventory*/
                if(sticks == 0){
                    $("#stick_text").html("You currently have " + sticks + " sticks");
                } else{
                if(sticks <= 1){
                    $("#stick_text").html("You currently have " + sticks + " stick");
                } else{
                    $("#stick_text").html("You currently have " + sticks + " sticks");
                }    
                }

                /*Partie stones du update inventory*/
                if(stones == 0){
                    $("#stone_text").html("You currently have " + stones + " stones");
                } else {
                if(stones <= 1){
                    $("#stone_text").html("You currently have " + stones + " stone");
                } else{
                    $("#stone_text").html("You currently have " + stones + " stones");
                }    
                }
            }
            
        /*Update les statistiques*/
            function updateStatistics(){
                /*Partie larvae du update statistics*/
                    if(larvaeStats > 0){
                        $("#statistics_total_larvae_text").css("display", "block");}
                    if(larvaeStats == 0){
                        $("#statistics_total_larvae_text").html("You have collected a total of " + larvaeStats + " larvae this reset.");
                    } else{
                    if(larvaeStats <= 1){
                        $("#statistics_total_larvae_text").html("You have collected a total of " + larvaeStats + " larva this reset.");
                    } else{
                        $("#statistics_total_larvae_text").html("You have collected a total of " + larvaeStats + " larvae this reset.");
                    }    
                    }
                /*Partie ants du update statistics*/
                    if(antsStats > 0){
                        $("#statistics_total_ants_text").css("display", "block");}
                    if(antsStats == 0){
                        $("#statistics_total_ants_text").html("You have collected a total of " + antsStats + " ants this reset.");
                    } else{
                    if(antsStats <= 1){
                        $("#statistics_total_ants_text").html("You have collected a total of " + antsStats + " ant this reset.");
                    } else{
                        $("#statistics_total_ants_text").html("You have collected a total of " + antsStats + " ants this reset.");
                    }    
                    }
                /*Partie leaves du update statistics*/
                    if(leavesStats > 0){
                        $("#statistics_total_leaves_text").css("display", "block");}    
                    if(leavesStats == 0){
                        $("#statistics_total_leaves_text").html("You have collected a total of " + leavesStats + " leaves this reset.");
                    } else{
                    if(leavesStats <= 1){
                        $("#statistics_total_leaves_text").html("You have collected a total of " + leavesStats + " leaf this reset.");
                    } else{
                        $("#statistics_total_leaves_text").html("You have collected a total of " + leavesStats + " leaves this reset.");
                    }    
                    }
                /*Partie sticks du update statistics*/
                    if(sticksStats > 0){
                        $("#statistics_total_sticks_text").css("display", "block");}    
                    if(sticksStats == 0){
                        $("#statistics_total_sticks_text").html("You have collected a total of " + sticksStats + " sticks this reset.");
                    } else{
                    if(sticksStats <= 1){
                        $("#statistics_total_sticks_text").html("You have collected a total of " + sticksStats + " stick this reset.");
                    } else{
                        $("#statistics_total_sticks_text").html("You have collected a total of " + sticksStats + " sticks this reset.");
                    }    
                    }
                /*Partie stones du update statistics*/
                    if(stonesStats > 0){
                        $("#statistics_total_stones_text").css("display", "block");}    
                    if(stonesStats == 0){
                        $("#statistics_total_stones_text").html("You have collected a total of " + stonesStats + " stones this reset.");
                    } else {
                    if(stonesStats <= 1){
                        $("#statistics_total_stones_text").html("You have collected a total of " + stonesStats + " stone this reset.");
                    } else{
                        $("#statistics_total_stones_text").html("You have collected a total of " + stonesStats + " stones this reset.");
                    }    
                    }
            }
        /*Update les achievements
            function updateAchievements(){

            }*/
});