"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Agency } from "@prisma/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FileUpload from "../global/file-upload";
import { AlertDialog } from "../ui/alert-dialog";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";

type Props = {
	data?: Partial<Agency>;
};

const FormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Agency name must be at least 2 characters long" }),
	companyEmail: z.string().email({ message: "Invalid email address" }),
	companyPhone: z.string().min(10, { message: "Invalid phone number" }),
	whiteLabel: z.boolean(),
	address: z.string().min(1, { message: "Invalid address" }),
	city: z.string().min(1, { message: "Invalid city" }),
	state: z.string().min(1, { message: "Invalid state" }),
	zipCode: z.string().min(1, { message: "Invalid zip" }),
	country: z.string().min(1, { message: "Invalid country" }),
	agencyLogo: z.string().min(1, { message: "Invalid logo" }),
});

const AgencyDetails = ({ data }: Props) => {
	const { toast } = useToast();
	// const router = useRouter();
	const [deletingAgency, setDeletingAgency] = useState(false);
	const form = useForm<z.infer<typeof FormSchema>>({
		mode: "onChange",
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: data?.name,
			companyEmail: data?.companyEmail,
			companyPhone: data?.companyPhone,
			whiteLabel: data?.whiteLabel || false,
			address: data?.address,
			city: data?.city,
			state: data?.state,
			zipCode: data?.zipCode,
			country: data?.country,
			agencyLogo: data?.agencyLogo,
		},
	});

	const isLoading = form.formState.isSubmitting;

	useEffect(() => {
		if (data) form.reset(data);
	}, [data, form]);

	const onSubmit = async () => {};

	return (
		<AlertDialog>
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Agency Information</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						recusandae vero, minus voluptate labore vitae cumque fugiat
						voluptatibus, amet odio, adipisci unde. Est nemo quia reiciendis quo
						aspernatur! Cum, error.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								disabled={isLoading}
								control={form.control}
								name="agencyLogo"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Agency Logo</FormLabel>
										<FormControl>
											<FileUpload
												apiEndpoint="agencyLogo"
												onChange={field.onChange}
												value={field.value}
											></FileUpload>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
						</form>
					</Form>
				</CardContent>
			</Card>
		</AlertDialog>
	);
};

export default AgencyDetails;
