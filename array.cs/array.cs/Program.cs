using System.Xml;

namespace array.cs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[]numbers = { 3, 7, 9, 12, 23 };
            int count = 0;
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 3 == 0) ;
                {
                    count++;
                    sum += numbers[i];
                }
                Console.WriteLine(sum/count);
            }
        }
    }
}