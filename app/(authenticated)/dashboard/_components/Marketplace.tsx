import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ShoppingBag, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

export default function MarketplaceCard() {
    return (
        <Card className="gap-3">
            <CardHeader className="flex justify-between mb-3">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <CardTitle>Marketplace</CardTitle>
                </div>
                {/* <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="cursor-pointer font-normal text-[12px] !py-1 w-[120px]">
                            <ShoppingCartIcon className="!h-3 !w-3 mr-1" />
                            Visit
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-auto text-sm text-muted-foreground">
                        Marketplace is coming soon!
                    </PopoverContent>
                </Popover> */}
            </CardHeader>

            <CardContent className="space-y-8">
                <>
                    <div className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-end md:items-center gap-3 md:gap-5">
                            <Image src="/assets/regalia.png" alt="" height={200} width={200} className="h-10 w-10 md:w-20 md:h-20" />
                            <div className="flex flex-col">
                                <div className="flex items-end gap-2">
                                    <div className="text-xs text-muted-foreground mb-1">Seller: Tatag Official</div>
                                    <Badge className="bg-red-600 text-[8px] md:text-[10px] px-2 py-0.5 w-fit mb-1">45% off</Badge>
                                </div>
                                <div className="font-semibold text-sm">TATAG Regalia 2025</div>
                            </div>
                        </div>
                        <div className="flex flex-col text-right">
                            <h1 className="line-through text-gray-500 text-sm">₱1,100</h1>
                            <h1 className="text-base font-semibold">₱605</h1>
                        </div>
                    </div>
                </>
            </CardContent>
        </Card>
    )
}
