
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const listingSchema = z.object({
  token: z.string().min(1, 'Please select a token'),
  amount: z.string().min(1, 'Amount is required'),
  price: z.string().min(1, 'Price is required'),
  priceUnit: z.string().min(1, 'Please select price unit'),
  duration: z.string().min(1, 'Please select duration'),
  description: z.string().optional(),
});

type ListingFormData = z.infer<typeof listingSchema>;

const CreateListingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ListingFormData>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      token: '',
      amount: '',
      price: '',
      priceUnit: 'SOL',
      duration: '7',
      description: '',
    },
  });

  const tokens = [
    { value: 'BONK', label: 'BONK - Bonk', emoji: '🐶' },
    { value: 'PEPE', label: 'PEPE - Pepe', emoji: '🐸' },
    { value: 'WIF', label: 'WIF - dogwifhat', emoji: '🐕' },
    { value: 'POPCAT', label: 'POPCAT - Popcat', emoji: '🐱' },
    { value: 'FLOKI', label: 'FLOKI - Floki', emoji: '🐺' },
  ];

  const onSubmit = async (data: ListingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Listing Created!",
      description: "Your token listing has been created successfully.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Listing</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Token Selection */}
              <FormField
                control={form.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select token to sell" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tokens.map((token) => (
                          <SelectItem key={token.value} value={token.value}>
                            <div className="flex items-center gap-2">
                              <span>{token.emoji}</span>
                              <span>{token.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="1,000,000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Number of tokens you want to sell
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="2.5" {...field} />
                    </FormControl>
                    <FormDescription>
                      Total price for the entire amount
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price Unit */}
              <FormField
                control={form.control}
                name="priceUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Unit</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="SOL">SOL</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Duration */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Listing Duration</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 Day</SelectItem>
                        <SelectItem value="3">3 Days</SelectItem>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="14">14 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Add any additional details about your listing..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide additional context for potential buyers
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Listing...' : 'Create Listing'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateListingForm;
