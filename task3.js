var numbers=[12,,73,84,70,42];
var sum=0;
var max=numbers[0];
var min=numbers[0];
for (i = 0; i < numbers.length; i++) {
   if(max<numbers[i])
    {
        max=numbers[i];
    }
    if(min>numbers[i])
    {
        min=numbers[i];
    }
    console.log((max+min)/2);
}