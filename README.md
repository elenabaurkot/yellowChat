## YellowChat

test

 Group 3 Project 3


clone https://github.com/BFronz/yellow-chat.git


```
Run  on command line: 
npm  install
npm run seed
npm start

```


```
Might need to run npx create-react-app yellow-chat then cd to yellow-chat first
OR
run npx create-react-app after cloning

```



* One table for  both customers & vendors with usertype. Map out user type when needed by this field
 - db: yellowchat
 - collection: user 

user Schema:
  
name:      type: String, required: true  
usertype:  type: String, required: true    
company:   type: String   
street:    type: String  
city:      type: String  
state:     type: String   
zip:       type: String   
email:     type: String  
phone:     type: String  
website:   type: String  
image:     type: String  
loginid:         type: String   
yellowchatlink:  type: String  
categories:[]  
