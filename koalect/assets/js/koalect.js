/* **************
/* **************
/* **************
/* **************
/* **************
ANGULAR
/* **************
/* **************
/* **************
/* **************

/* ---------- Angular 1 */
var app = angular.module('koalectAngular', ['ngAnimate']); // Création de l'app AngularJs

app.controller('KoalectAngularTextController', ['$scope', function ($scope) { // Création d'un controller dans l'app

    $scope.maxLength = 100; // Placeholder pour l'input
    $scope.inputTotalChar = function (maxLength, input) { // Création de la fonction qui vérifie la longueur des charactère

        if (input && input.length >= maxLength) { // Si la longueur de l'input est supérieur à la longueur demandée
            $scope.textarea = input.substring(0, maxLength); // j'insère dans le textearea ne récupérant que les X premiers
        }
    };
    }]);


/* ---------- Angular 2 */
app.controller('KoalectAngularToDoController', ['$scope', function ($scope) { // Création du controleur de la to do list

    // Création de ma liste de base
    $scope.list = [{
            title: 'Aller faire les courses',
            complete: false
            },
        {
            title: 'Regarder Game of thrones',
            complete: false
            },
        {
            title: 'Manger un bout',
            complete: false
            },
        {
            title: 'Voir Colin',
            complete: true
            }
        ];

    $scope.addToList = function () { // Fonction ajouter a la liste
        if ($scope.toAdd) {

            var newItem = { // Crée un nouvel objet
                title: $scope.toAdd, // Avec le titre contenu dans l'input
                complete: false // Et l'état complete à faux
            };
            $scope.list.push(newItem); // J'insère dans ma liste
            $scope.toAdd = ''; // Je réinitialise l'input add
        }
    };

    $scope.removeToList = function (index) { // Appel de la fonction remove 

        $scope.list.splice(index, 1); // Utilise splice avec l'index pour supprimer le bon objet
    };

    $scope.editItemList = function (index, title, complete) { // Appel de la fonction edit

        if (title)
            $scope.list[index]['title'] = title; // Si je mange mon titre je le modifie dans la liste grace à l'index

        $scope.list[index]['complete'] = complete; // je change l'état complete en fonction de la checkbox
    };

    }]);


/* ---------- Angular 3 */
app.controller('KoalectAngularFormulaireController', ['$scope', function ($scope) { // Création du controller du formulaire

    // Initialisation de valeurs à false 
    // car le formulaire n'est pas encore envoyé
    $scope.formSent = false;
    $scope.phoneNumber = false;

    $scope.sendForm = function (phone) { // Appel de la fonction de l'envoi du formulaire

        $scope.formSent = true;
        if (isFinite(Number(phone))) {
            $scope.phoneNumber = true; // Affichage du succes de l'envoi du formulaire

        } else {
            $scope.phoneNumber = false;
        } // Si le chiffre est un nombre je retourne true pour ne pas afficher l'erreur

    };
    }]);


/* ---------- Angular Challenge */
app.controller('KoalectAngularChallengeController', ['$scope', function ($scope) { // Création du controller du formulaire

    // Initialisation de valeurs à false 
    // car le formulaire n'est pas encore envoyé
    $scope.list = [
        {
            title: 'Default',
            template: 'default.html'
            },
        {
            title: 'Montagne',
            template: 'mountain.html'
            },
        {
            title: 'Neige',
            template: 'snow.html'
            }
    ];
    
    $scope.template = 'default.html';
    
    $scope.includeTemplate = function(template){
        
        return '_include/' + template + '';
    }

    }]);

app.directive('templateModale', function () {

    return {

        restrict: 'E',
        templateUrl: "_include/template.html",
        controller: function ($scope) {

            $scope.getTemplate = function () {

                return "_include/" + $scope.template;
            };
        }
    };
});

/* **************
/* **************
/* **************
/* **************
/* **************
Javascript 
/* **************
/* **************
/* **************
/* ************** */

$(document).ready(function () {


    /* ---------- Javascript 1 */

    // Définition de la fonciton
    function removeDuplicate() {

        var exo1 = $('#koalect-js-1'); // Selectionne le DOM element
        var array = exo1.val().toLowerCase().split(''); // transforme le texte de l'elelement et le transforme en array            
        var indexArray = []; // Création d'un array reprenant les index des valeurs à supprimer

        $.each(array, function (i) { // Loop 'for' en Jquery à travers mon tableau de valeur

            var inArrayIndex = $.inArray(array[i], array); // 
            if (inArrayIndex != i)
                indexArray.push(inArrayIndex, i); // Si l'index est différent de lui même c'est qu'il existe autre part donc je l'ajoute dans mon array d'index
        });

        $.each(indexArray, function (i) {

            delete array[indexArray[i]]; // Je supprime les el de l'array pour chaque element de l'array d'index
        })

        array = array.filter(Boolean); // Je retire tout les element 'empty'
        array[0] = array[0].toUpperCase(); // Je remet en lettre capitale le premier element de l'array
        $('#koalect-js-1-answer').html(array).addClass('alert alert-primary'); // Réécrit et change la classe pour l'afficher


    }

    /* ---------- Javascript 2 */
    function checkPalindrome() {

        var exo2 = $('#koalect-js-2');
        var array = exo2.val().toLowerCase().split(''); // transforme le texte de l'elelement et le transforme en array 

        var palindrome = true; // Palindrome est a true pour commencer

        $.each(array, function (i) { // pour chaque element de l'array 

            var j = array.length - 1 - i; // Je prend son opposé dans l'aray
            if (array[i] != array[j]) { // Si les deux opposé ne sont pas égaux je retourne false et je sors de ma fonction each
                palindrome = false;
                return false;
            }

        })

        // En fonction de ma variable palindrome je montre ce que je veux 
        if (palindrome) {
            // QUe c'en est un
            $('#koalect-js-2-answer').html("C'est un palindrome").addClass('alert alert-primary');
        } else {
            // ou pas
            $('#koalect-js-2-answer').html("Ce n'est pas un palindrome").addClass('alert alert-primary');
        }


    }

    /* ---------- Javascript 3 */
    function checkSameNumbers() {

        var exo3_1 = $('#koalect-js-3-1');
        var exo3_2 = $('#koalect-js-3-2');
        var array1 = exo3_1.val().split(''); // transforme le texte de l'elelement et le transforme en array 
        var array2 = exo3_2.val().split(''); // transforme le texte de l'elelement et le transforme en array 

        var uniqueArray = []; // Création d'un array de valeur unique
        $.each(array1, function (i) { // Pour chaque element de l'array 1 

            if ($.inArray(array1[i], array2) >= 0 && // inArray renvoi soit l'index soit -1 si c'est 0 c'est lui même
                $.inArray(array1[i], uniqueArray) < 0) // Et si il n'existe pas déjà dans l'array unique
                uniqueArray.push(array1[i]); // Je le pousse dans mon array d'index unique

        });

        $('#koalect-js-3-answer').html(uniqueArray).addClass('alert alert-primary');
    }

    // j'évite les fomulaire de renvoyé des donnée et de raffraichir le navigateur
    $("form").submit(function (e) {
        e.preventDefault();
    });

    // Call function
    // Lance les fonctions aux clics
    $('#koalect-js-btn').click(function () {
        removeDuplicate();
    });

    $('#koalect-js-btn-2').click(function () {
        checkPalindrome();
    });

    $('#koalect-js-btn-3').click(function () {
        checkSameNumbers();
    });
    
    function initBtn(){
        
        $(".modale-btn").parent().removeClass('active');
        $(".modale-btn:checked").parent().addClass('active');
    }    
    initBtn();
    
    $('.modale-btn').parent().click(initBtn);
    


})
