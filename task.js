var numbers=[3,6,7,12,19,26];
var sum=0;
var count=0;
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]%3==0)
{
    count++;
    sum+=numbers[i];
}
}
console.log(sum/count);