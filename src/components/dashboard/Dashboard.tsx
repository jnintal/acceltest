"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Send,
  LineChart,
  List
} from "lucide-react";
import { useEffect, useState } from "react";

// Mock data
const accountData = {
  totalBalance: "$3,605,428.01",
  accounts: [
    { name: "Checking 9522", balance: "$540,814.40", type: "checking" },
    { name: "Savings 7231", balance: "$180,271.12", type: "savings" },
    { name: "Treasury", balance: "$2,884,243.08", type: "treasury" }
  ],
  transactions: [
    { date: "Feb 29", description: "Transfer from Accel Checking 9522", amount: "$3,200.00", account: "Savings 7231", type: "Transfer in" },
    { date: "Feb 28", description: "Ally Bank Chase", amount: "$12,500.00", account: "Checking 9522", type: "Transfer out" },
  ]
};

export default function Dashboard() {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    // Generate random chart data
    setChartData([3.2, 3.3, 3.6, 3.5, 3.6, 3.8]);
  }, []);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <h1 className="text-2xl font-bold">Welcome to Accel</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="gap-2 flex-1 md:flex-none justify-center">
            <Download size={18} className="hidden md:block" />
            Deposit
          </Button>
          <Button variant="default" className="bg-black text-white gap-2 hover:bg-black/80 flex-1 md:flex-none justify-center">
            <Send size={18} className="hidden md:block" />
            Send
          </Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm text-muted-foreground">TOTAL BALANCE</span>
                <CardTitle className="text-3xl md:text-4xl font-bold">{accountData.totalBalance}</CardTitle>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <LineChart size={18} />
                </Button>
                <Button size="icon" variant="ghost">
                  <List size={18} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button variant="outline" size="sm" className="text-xs rounded-md">1D</Button>
              <Button variant="outline" size="sm" className="text-xs rounded-md">1W</Button>
              <Button variant="outline" size="sm" className="text-xs rounded-md bg-black text-white">1M</Button>
              <Button variant="outline" size="sm" className="text-xs rounded-md">6M</Button>
              <Button variant="outline" size="sm" className="text-xs rounded-md">YTD</Button>
              <Button variant="outline" size="sm" className="text-xs rounded-md">ALL</Button>
            </div>

            <div className="h-40 w-full relative">
              {/* Simple chart */}
              <div className="absolute inset-0 flex items-end">
                {chartData.map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-transparent"
                    style={{
                      height: `${(value / 4) * 100}%`,
                      position: 'relative'
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 bg-black h-0.5 flex items-end">
                      <div
                        className="w-full bg-black rounded-t"
                        style={{ height: `${(value / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between text-xs text-gray-500">
                <span>29 MAR</span>
                <span className="invisible md:visible">13 MAR</span>
                <span className="invisible md:visible">20 MAR</span>
                <span>6 MAR</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Account Details</CardTitle>
              <Button size="icon" variant="ghost">+</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {accountData.accounts.map((account, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-black text-white p-2 rounded">$</div>
                  <span>{account.name}</span>
                </div>
                <span className="font-medium">{account.balance}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Recent Transactions</CardTitle>
            <Button variant="link" className="text-black">View all</Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-muted-foreground text-sm">
                <th className="font-normal pb-2">Date</th>
                <th className="font-normal pb-2">To/From</th>
                <th className="font-normal pb-2 text-right">Amount</th>
                <th className="font-normal pb-2 hidden md:table-cell">Account</th>
                <th className="font-normal pb-2 hidden md:table-cell">Type</th>
              </tr>
            </thead>
            <tbody>
              {accountData.transactions.map((transaction, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4">{transaction.description}</td>
                  <td className="py-4 text-right font-medium text-green-600">{transaction.amount}</td>
                  <td className="py-4 hidden md:table-cell">{transaction.account}</td>
                  <td className="py-4 hidden md:table-cell">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
