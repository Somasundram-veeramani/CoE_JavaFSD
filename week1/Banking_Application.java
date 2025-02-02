package week1;
import java.util.Scanner;

class BankAccount {
    private double balance;

    public synchronized void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + ", Balance: " + balance);
    }

    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + ", Balance: " + balance);
        } else {
            System.out.println("Insufficient funds.");
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class Banking_Application {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankAccount account = new BankAccount();

        while (true) {
            System.out.println("\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();

            if (option == 4) break;

            System.out.print("Enter amount: ");
            double amount = scanner.nextDouble();

            Thread transactionThread = new Thread(() -> {
                if (option == 1) {
                    account.deposit(amount);
                } else if (option == 2) {
                    account.withdraw(amount);
                }
            });
            transactionThread.start();

            try {
                transactionThread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        scanner.close();
    }
}
