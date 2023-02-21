# array-method-shortcuts

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

```npm i array-method-shortcuts```
```import {DELETE,universalFilter} from '@rohitambawata9716/array-method-shortcuts' ```

## This file includes two array filter methods:
### 1. `DELETE` method
### 2. `universalFilter` method

------------------------------------------------------------------------
-----------------------------------------------------------------------
# 1. `DELETE` method usage
`In short it is a filter  method`
`Theory:`This method is useful in those situations where we want to `remove` an item of the array(data provided by database or any data.js file holds an array of objects or simple array) whenever someone `clicked` on that item. 
``Example``: const data = [{id:0,name:'dummy1'},{{id:1,name:'dummy2'}}] etc.
This dummy array holds 2 Objects.
`Functional Component:`
const [user,setUser] = useState(data)
const `clicked` = (id)=>{
    `setUser(DELETE(user,id))`  //use a hook useState
    //the above method will only delete the clicked `div`
    }
}
return(){
    `data`.map((item)=>{
    `return` (
    <div onClick={()=>clicked(item.id)}>
    <h1>{item.name}</h1>
    </div>
    )
    })
}

# 1. `universalFilter` method usage
`Theory:` This method is useful for universal filtering a given data by providing two arguments.
`1.` Data (array)
`2.` string of bool condition

`Functional Component:`
const [user,setUser] = useState(data)
const `clicked` = (id)=>{
 // `Exmp 1`  `setUser(universalFilter(user,'id !== id'))`  //use a hook useState
  // `Exmp 2`     `setUser(universalFilter(user,'name === "Rohit" '))`  //use a hook useState
    //the above method will only delete the clicked `div`
    }
}
return(){
    `data`.map((item)=>{
    `return` (
    <div onClick={()=>clicked(item.id)}>
    <h1>{item.name}</h1>
    </div>
    )
    })
}