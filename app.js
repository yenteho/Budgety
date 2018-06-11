// BUDGET CONTROLLER

var budgetController = (function(){
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
     
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    return {
        addItem: function(type, des, val){
            var newItem;
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID =9
            // ID = last ID + 1
            // Create new ID
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            // Create new item base on 'inc' or 'exp' type
            newItem = new Expense(ID, des, val);
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);           
            } else if (type === 'inc'){
                newItem= new Expense(ID, des, val);
            }
            //Push it into our data structure
            data.addItem[data].push(newItem);
            //return the new element
            return newItem;
        }
    }

})();

            


// UI CONTROLLER
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: type = document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: description = document.querySelector(DOMstrings.inputDescription).value,
                value: value = document.querySelector(DOMstrings.inputValue).value
            }     
        },
        getDOMstings: function(){
            return DOMstrings;
        }
    }
})();
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstings(); 

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if ( event.keyCode === 13 || event.which === 13 ) {
                ctrlAddItem();
            }
        });
    }
    var ctrlAddItem = function(){
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        // 2. Add the item to the budeget controller
        
        // 3. add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    }
    //initializtion function
    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();