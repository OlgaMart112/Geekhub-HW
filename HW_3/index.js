'use strict'
;(function (){
    checkWindowProperty("Chat", Chat);
    checkWindowProperty("Message", Message);
    checkWindowProperty("User", User);

function Chat (name){
    this.chatUsers = [];
    this.chatHistory = [];
    this.showMessages = [];
    
    if (!name){
        console.error("error");
    }
    this.addUser = function(user){
        for (let i = 0; i < arguments.length; i++){ 
            if (user instanceof User){
            let userToAdd = arguments[i];
            this.chatUsers.push(userToAdd);
        }
     }
  }
    this.removeUser = function (user){
        this.chatUsers = this.chatUsers.filter(item => item.name !== user.name);
    }

    this.sendMessage = function (user, messageStr) {
    let userName = this.chatUsers.find(item => item.name === user.name);
    if (userName){
    let message = new Message (user, messageStr);
    this.chatHistory.push(message);
    return message;
    } else {
        console.error("This user is unconnect to this chat");
    }
   }
     
    this.showChatHistory = function (){
        let showMessages,  indexofMessage, numberOfMessage;
        if (arguments.length ==2 ){
            indexofMessage = arguments[0];
            numberOfMessage = arguments[1];
        }else if (arguments.length == 1){
            indexofMessage = 0;
            numberOfMessage = arguments[0];
        }else { 
            indexofMessage = 0;
            numberOfMessage = 10;          
        }
        showMessages = this.chatHistory.slice(indexofMessage, numberOfMessage);
        console.log(showMessages);
        let result = showMessages.forEach( item => 
        console.log (`[${item.userCreateMessage}], [${item.time}]: (${item.message})`));
        
           }
        this.readUnreadMessage = function(user){  
            let number;  
            let unreadMessages = this.chatHistory
            .filter(item => item.userCreateMessage !== user.name);
           if (arguments.length == 2 && (typeof(arguments[1]) == "number")){
             unreadMessages = unreadMessages.reverse();
             for (let i = 0; i < arguments[1]; i++){
                 let message = unreadMessages[i];
                 if (!message.usersReadThisMessage.includes(user.name)){
                     message.readMessage(user);
                 }
                 

                 console.log(`[${message.userCreateMessage}], [${message.time}]: (${message.message})`);
             }
            }else if (arguments.length == 1 && (typeof(arguments[0]) == "number")){
                 number = arguments[0];console.log(number)
                 unreadMessages = unreadMessages.reverse().slice(-1, number);
                 console.log(unreadMessages);
             }
            /* unreadMessages = unreadMessages.forEach(item => item.readMessage(this, user.name));console.log*/ 
           }
        }
      
 function User (name){
    this.name = name;
    this.defaultChat;
    this.setDefultChat = function(chat){
        this.defaultChat = chat;
    }
    this.loginChat = function(chat){
     (arguments.length == 0) ? this.defaultchat.addUser(this): chat.addUser(this);
     this.defaultChat = chat;
   }
    this.logOutChat = function (chat){
        if (arguments.length == 0){
            this.defaultchat.removeUser(this);
           }else{
            chat.removeUser(this);
           } 
    }
    this.sendMessage = function (chat, message){
     let chat, message;
     if (arguments.length == 2){
         chat = arguments[0];
         message = arguments[1];
     }else if(arguments.length == 1){
         chat = this.defaultChat;
         message = arguments[0];
     }
     chat.sendMessage(this, message);
  }
    this.readMessage = function (){
     let chatCurrent, numberOfMessage;
     if(arguments.length == 2){
        chat = arguments[0];
        numberOfMessage = arguments[1];
        chat.readUnreadMessage(this,numberOfMessage);
     }else if (arguments.length == 1){
         if(arguments[0] instanceof Chat){
          chat.readUnreadMessage(this, 10);
         }else if (typeof(arguments[0]) == 'number') {
           numberOfMessage = arguments[0];
           this.defaultChat.readUnreadMessage(this, numberOfMessage);
          } 
         }
     }
 }

function Message (user, messageStr){
    if (!arguments.length == 2){
        console.error("Miss 1 argument!")
    }
    this.time = Date.now();
    this.message = messageStr;
    this.userCreateMessage = user.name;
    this.usersReadThisMessage = []; 
    this.readMessage = function(user){
       this.usersReadThisMessage.push(user.name);
    }
 }

 function checkWindowProperty (prop, value) {
    if (window.hasOwnProperty(prop)) {
       console.error(`This ${prop} had already been declared!`)
    } else {
        Object.defineProperty(window, prop, {
            value: value,
            writable: false,
            configurable : false
        });
    }
}
})();
/*-----------TEST----------------*/

 let chat1 = new Chat('friends');
 let user1 = new User('Olya');
 let user3 = new User('Misha');
 user1.loginChat(chat1);
 user3.loginChat(chat1);
 console.log(chat1.chatUsers);
 chat1.sendMessage(user1, "hello!");
 chat1.sendMessage(user1, "How are you?");
 chat1.sendMessage(user3, "I am fine!");
 chat1.sendMessage(user3, "Are you?");
 chat1.sendMessage(user3, "I am good too!");
 chat1.sendMessage(user1, "What is your hobby&");
 chat1.sendMessage(user3, "I like to play footbal.Are you?");
 chat1.sendMessage(user3, "I like to dance!");
 chat1.sendMessage(user3, "Nice!");
 console.log(chat1.chatHistory);
 chat1.showChatHistory(3);
 user3.readMessage(2);
 let user4 = new User("Zoya");
 user4.setDefultChat(chat1);
 console.log(user4.defaultChat);
 user4.loginChat(chat1);
 user4.readMessage(1);