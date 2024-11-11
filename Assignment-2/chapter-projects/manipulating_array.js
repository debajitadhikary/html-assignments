
let theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
    {test: 'one', score: 55}, ['one', 'two']];
    
    theList.shift();  // Removes 'Laurence'
    
    theList.pop();    // Removes ['one', 'two']
    
    theList.unshift('FIRST');
    
    theList[2] = 'MIDDLE';
    
    theList[3] = 'hello World';
    
    theList.pop();
    
    theList.push('LAST');
    
    // Removing  any `null` or `undefined` values : 
    theList = theList.filter(item => item !== null && item !== undefined);
    
    console.log(theList);
    