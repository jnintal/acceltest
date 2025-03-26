"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Eye } from "lucide-react";

export default function AccountDetails() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold">Account details</h1>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Routing number</label>
            <div className="flex items-center justify-between border rounded-md p-3">
              <span className="font-mono text-sm md:text-base overflow-hidden overflow-ellipsis">992187472</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                <Copy size={16} />
              </Button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Account number</label>
            <div className="flex items-center justify-between border rounded-md p-3">
              <span className="font-mono text-sm md:text-base flex items-center overflow-hidden overflow-ellipsis">
                •••••••• 2210
                <Button variant="ghost" size="icon" className="h-6 w-6 ml-2 shrink-0">
                  <Eye size={16} />
                </Button>
              </span>
              <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                <Copy size={16} />
              </Button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Bank details</label>
            <div className="flex items-center justify-between border rounded-md p-3">
              <div className="font-mono text-sm md:text-base space-y-1 overflow-hidden overflow-ellipsis">
                <p>Lead Bank</p>
                <p>1801 Main St</p>
                <p>Kansas City, MO</p>
                <p>64108</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 ml-2">
                <Copy size={16} />
              </Button>
            </div>
          </div>

          <Button variant="link" className="text-black pl-0 flex items-center gap-2">
            View address details
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
