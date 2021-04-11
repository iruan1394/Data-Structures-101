package com.company;
import java.lang.Math;
import java.io.FileWriter;
import java.util.Scanner;

public class ArrayTest {
    static int tries = 1000;
    public static void main(String[] args) {
        try {
            double[] times = new double[11];
            double trash;
            FileWriter w;
            Scanner s = new Scanner(System.in);
            System.out.println("Which test?");

            int num = Integer.parseInt(s.nextLine());

            switch(num) {
                case 1:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arrayAccess(i * 10000);
                        if (i == 1 || i == times.length - 1)
                            times[i] = arrayAccess(i * 10000);
                    }

                    w = new FileWriter("arrayAccess.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 2:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arraySearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = arraySearch(i * 10000);
                    }
                    w = new FileWriter("arraySearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arrayFInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = arrayFInsert(i * 10000);
                    }

                    w = new FileWriter("arrayFInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arrayEInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = arrayEInsert(i * 10000);
                    }

                    w = new FileWriter("arrayEInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 5:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arrayFDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = arrayFDelete(i * 10000);
                    }

                    w = new FileWriter("arrayFDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 6:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = arrayEDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = arrayEDelete(i * 10000);
                    }

                    w = new FileWriter("arrayEDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                default:
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public static double arrayAccess(int size){
        if(size == 0)
            return 0;
        int[] arr = new int[size];
        int target = (int)Math.floor(arr.length/2);
        for(int i = 0; i < arr.length; i++)
            arr[i] = i + 1;

        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = arr[target];
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double arraySearch(int size){
        if(size == 0)
            return 0;
        int[] arr = new int[size];
        int target = (int)Math.floor(arr.length/2);
        for(int i = 0; i < arr.length; i++)
            arr[i] = i + 1;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            for(int k = 0; k < arr.length; k++){
                if(arr[k] == target){
                    sum += System.nanoTime() - start;
                    break;
                }
            }
        }

        return sum/(tries * 1000);
    }

    public static double arrayFInsert(int size){
        if(size == 0)
            return 0;
        double sum = 0;

        for(int j = 0; j < tries; j++){
            int[] arr = new int[size];
            for(int i = 0; i < arr.length-1; i++)
                arr[i] = i + 1;

            double start = System.nanoTime();
            for(int k = arr.length-1; k > 0; k--)
                arr[k] = arr[k-1];
            arr[0] = 0;

            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double arrayEInsert(int size){
        if(size == 0)
            return 0;
        double sum = 0;
        for(int j = 0; j < tries; j++){
            int[] arr = new int[size+1];
            for(int i = 0; i < arr.length-1; i++)
                arr[i] = i + 1;

            double start = System.nanoTime();
            arr[arr.length-1] = arr.length;

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double arrayFDelete(int size){
        if(size == 0)
            return 0;
        double sum = 0;
        for(int j = 0; j < tries; j++){
            int[] arr = new int[size];
            for(int i = 0; i < arr.length; i++)
                arr[i] = i + 1;

            double start = System.nanoTime();
            for(int k = 0; k < arr.length-1; k++)
                arr[k] = arr[k+1];
            arr[arr.length-1] = 0;

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double arrayEDelete(int size) {
        if(size == 0)
            return 0;
        double sum = 0;
        for(int j = 0; j < tries; j++){
            int[] arr = new int[size];
            for(int i = 0; i < arr.length; i++)
                arr[i] = i + 1;

            double start = System.nanoTime();

            arr[arr.length-1] = 0;

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }
}
