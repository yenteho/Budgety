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
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Create new item base on 'inc' or 'exp' type
            newItem = new Expense(ID, des, val);
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);           
            } else if (type === 'inc'){
                newItem= new Expense(ID, des, val);
            }
            //Push it into our data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    }

})();

            


// UI CONTROLLER
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return {
        getInput: function(){
            return {
                type: type = document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: description = document.querySelector(DOMstrings.inputDescription).value,
                value: value = document.querySelector(DOMstrings.inputValue).value
            }     
        },
        addListItem: function(obj, type) {
            var html, newHTML, element;
            // 1. Create HTML string with placeholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%""><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // 2. Replace the Placeholder text with some actual data
            newHTML = html.replace('%id%', obg.id);
            newHTML = newHTML.replace('%description%', obg.description);
            newHTML = newHTML.replace('%value%', obg.value);
            // 3. Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },
        getDOMstings: function(obj, type){
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
        var input, newItem;
        // 1. Get the filed input data
        input = UICtrl.getInput();
        // 2. Add the item to the budeget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
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