import { Component } from '@angular/core';

export interface data {
	option: string,
	type: string,
	required: boolean,
	description: string,
}

const tableData: data[] = [{
	option: 'url',
	type: 'رشته',
	required: true,
	description: 'آدرس اینترنتی وبسایت مقصد',
},
{
	option: 'width',
	type: 'عدد در واحد پیکسل',
	required: false,
	description: 'عرض تصویر (پیشفرض: 600px)',
},
{
	option: 'crop',
	type: 'عدد در واحد پیکسل',
	required: false,
	description: 'ارتفاع تصویر (پیشفرض: 1200px)',
},
{
	option: 'maxAge',
	type: 'عدد در واحد ثانیه',
	required: false,
	description: 'مقدار زمان مشخص برای بروزرسانی تصویر ذخیره شده',
},
{
	option: 'format',
	type: 'jpg | png',
	required: false,
	description: 'نوع تصویر',
},
{
	option: 'fullPage',
	type: 'true | false',
	required: false,
	description: 'تصویر شامل کل صفحه ی وب سایت باشد یا خیر',
},
{
	option: 'wait',
	type: 'عدد در واحد ثانیه، کمترین مقدار: 1ثانیه، بیشترین مقدار: 30ثانیه',
	required: false,
	description: 'مدت زمان انظار بعد از بارگزاری صفحه و تهیه تصویر بعد از زمان(پیشفرض: 0ثانیه)',
},
{
	option: 'viewportWidth',
	type: 'عدد در واحد پیکسل',
	required: false,
	description: 'تصویر صفحه وب سایت در عرض مشخص شده ذخیره خواهد شد.'
},
{
	option: 'viewportHeight',
	type: 'عدد در واحد پیکسل',
	required: false,
	description: 'تصویر صفحه وب سایت در ارتفاع مشخص شده ذخیره خواهد شد.'
}
]
@Component({
	selector: 'app-docs',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.scss']
})

export class DocsComponent {
	displayedColumns: string[] = ['option', 'type', 'required', 'description'];
	dataSource = tableData;
	search: string = 'http://localhost:3001/capture?url=https://www.google.com/&width=800&crop=600';
}
