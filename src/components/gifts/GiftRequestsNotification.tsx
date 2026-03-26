import { useState } from 'react';
import { Gift, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useGiftRequests } from '@/hooks/useGiftRequests';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export function GiftRequestsNotification() {
  const { t } = useTranslation();
  const { incomingRequests, pendingCount, acceptRequest, rejectRequest } = useGiftRequests();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="w-10 h-10 rounded-full hover:bg-muted relative"
      >
        <Gift className="w-5 h-5 text-amber-500" />
        {pendingCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold border-2 border-background">
            {pendingCount}
          </span>
        )}
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="rounded-t-3xl max-h-[70vh] overflow-y-auto">
          <SheetHeader className="text-left pb-4 border-b border-border/50">
            <SheetTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-500" />
              {t('gift.requestsTitle')}
            </SheetTitle>
          </SheetHeader>

          <div className="py-4 space-y-4">
            {incomingRequests.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {t('gift.noRequests')}
              </p>
            ) : (
              incomingRequests.map((req: any) => (
                <div key={req.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    {req.gift_item?.photos?.[0] ? (
                      <img src={req.gift_item.photos[0]} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Gift className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {req.requester_profile?.display_name || t('gift.unknownUser')}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t('gift.wantsYourGift', { item: req.gift_item?.title || '' })}
                    </p>
                    {req.message && (
                      <p className="text-xs text-muted-foreground mt-1 italic">"{req.message}"</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-8 h-8 text-destructive hover:bg-destructive/10"
                      onClick={() => rejectRequest.mutate(req.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="w-8 h-8 bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={() => acceptRequest.mutate(req.id)}
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
