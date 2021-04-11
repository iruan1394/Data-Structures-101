package com.company;

import java.lang.Math;
import java.io.FileWriter;
import java.util.Scanner;
import java.util.Stack;

public class StackTest {
    static int tries = 1000;
    public static void main(String[] args) {
        try {
            double[] times = new double[11];
            double trash;
            FileWriter w;
            Scanner s = new Scanner(System.in);
            System.out.println("Which test?");

            int num = Integer.parseInt(s.nextLine());

            switch (num) {
                case 1:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = stackAccess(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackAccess(i * 10000);
                    }
                    w = new FileWriter("stackAccess.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 2:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = stackSearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackSearch(i * 10000);
                    }
                    w = new FileWriter("stackSearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = stackBInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackBInsert(i * 10000);
                    }
                    w = new FileWriter("stackBInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    times[9] = stackTInsert(90000);
                    times[10] = stackTInsert(100000);
                    for(int i = 0; i < times.length-2; i++) {
                        times[i] = stackTInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackTInsert(i * 10000);
                    }

                    w = new FileWriter("stackTInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 5:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = stackBDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackBDelete(i * 10000);
                    }
                    w = new FileWriter("stackBDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 6:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = stackTDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = stackTDelete(i * 10000);
                    }
                    w = new FileWriter("stackTDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                default:
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static double stackAccess(int size){
        if(size == 0)
            return 0;
        Stack<Integer> s = new Stack();
        for(int i = 1; i <= size; i++)
            s.push(i);

        int target = (int)Math.floor(s.size()/2);

        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++){
            Stack<Integer> store = new Stack();
            double start = System.nanoTime();
            for(int k = 0; k < target; k++)
                store.push(s.pop());
            temp = s.peek();

            while(!store.empty())
                s.push(store.pop());

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double stackSearch(int size){
        if(size == 0)
            return 0;
        Stack<Integer> s = new Stack();
        for(int i = 1; i <= size; i++)
            s.push(i);

        int target = (int)Math.floor(s.size()/2);

        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++){
            Stack<Integer> store = new Stack();
            double start = System.nanoTime();
            for(int i = 0; i < size; i++){
                if(s.peek() == target){
                    temp = i;
                    break;
                }
                store.push(s.pop());
            }
            while(!store.empty())
                s.push(store.pop());
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double stackBInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            Stack<Integer> s = new Stack();
            for(int i = 1; i <= size; i++)
                s.push(i);
            Stack<Integer> store = new Stack();
            double start = System.nanoTime();
            while(!s.empty())
                store.push(s.pop());
            s.push(0);
            while(!store.empty())
                s.push(store.pop());

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double stackTInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            Stack<Integer> s = new Stack();
            for(int i = 1; i <= size; i++)
                s.push(i);
            double start = System.nanoTime();
            s.push(0);
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double stackBDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            Stack<Integer> s = new Stack();
            for(int i = 1; i <= size; i++)
                s.push(i);
            Stack<Integer> store = new Stack();
            double start = System.nanoTime();
            for(int i = 0; i < size-1; i++)
                store.push(s.pop());
            s.pop();
            while(!store.empty())
                s.push(store.pop());

            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double stackTDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            Stack<Integer> s = new Stack();
            for(int i = 1; i <= size; i++)
                s.push(i);
            double start = System.nanoTime();
            s.pop();
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }
}


