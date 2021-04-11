package com.company;
import java.lang.Math;
import java.io.FileWriter;
import java.util.Scanner;
import java.util.LinkedList;

public class LinkedTest {
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
                        times[i] = linkedAccess(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedAccess(i * 10000);
                    }
                    w = new FileWriter("linkedAccess.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 2:
                    for(int i = 0; i < times.length; i++){
                        times[i] = linkedSearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedSearch(i * 10000);
                    }

                    w = new FileWriter("linkedSearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++){
                        times[i] = linkedFInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedFInsert(i * 10000);
                    }

                    w = new FileWriter("linkedFInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    for(int i = 0; i < times.length; i++){
                        times[i] = linkedEInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedEInsert(i * 10000);
                    }

                    w = new FileWriter("linkedEInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 5:
                    for(int i = 0; i < times.length; i++){
                        times[i] = linkedFDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedFDelete(i * 10000);
                    }

                    w = new FileWriter("linkedFDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 6:
                    for(int i = 0; i < times.length; i++){
                        times[i] = linkedEDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = linkedEDelete(i * 10000);
                    }

                    w = new FileWriter("linkedEDelete.txt");
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

    public static double linkedAccess(int size){
        if(size == 0)
            return 0;
        LinkedList<Integer> lst = new LinkedList();
        for(int i = 1; i <= size; i++)
            lst.add(i);
        int target = (int)Math.floor(lst.size()/2);

        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = lst.get(target);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double linkedSearch(int size){
        if(size == 0)
            return 0;
        LinkedList<Integer> lst = new LinkedList();
        for(int i = 1; i <= size; i++)
            lst.add(i);
        int target = (int)Math.floor(lst.size()/2);

        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = lst.indexOf(target);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double linkedFInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            LinkedList<Integer> lst = new LinkedList();
            for(int i = 1; i <= size; i++)
                lst.add(i);
            double start = System.nanoTime();
            lst.addFirst(0);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double linkedEInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            LinkedList<Integer> lst = new LinkedList();
            for(int i = 1; i <= size; i++)
                lst.add(i);
            double start = System.nanoTime();
            lst.addLast(0);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double linkedFDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            LinkedList<Integer> lst = new LinkedList();
            for(int i = 1; i <= size; i++)
                lst.add(i);
            double start = System.nanoTime();
            lst.remove(0);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double linkedEDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int j = 0; j < tries; j++){
            LinkedList<Integer> lst = new LinkedList();
            for(int i = 1; i <= size; i++)
                lst.add(i);
            double start = System.nanoTime();
            lst.removeLast();
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }
}
