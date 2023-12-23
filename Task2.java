public class Task2
{ 
	public static void main(String [] args)
	{
        int[] numbers = {1, 2, 3, -4, -5, 6};
		System.out.println(sumOfPositiveIntegers(numbers));
	}

    /* Approach: Initialize the sum to 0 and then iterate through each element of the array. If the element of the array is positive then add
    it to the sum. Finally, the sum will be returned. 
    An optimization appr0ach can be to attempt using parallel processing. An alternate way of implementing this solution would be to have
    if(number < 0) continue; However, the time complexity for this would still be O(n) because each element of the array would still need
    to be visited in order to check if it is positive or not. */ 
    public static int sumOfPositiveIntegers(int[] arr){
        int sum = 0;

        for(int number: arr){
            if (number >= 0){
                sum+= number;
            }
        }

        return sum;
    }

}