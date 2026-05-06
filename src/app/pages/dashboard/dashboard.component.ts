import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, DecimalPipe } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import type {
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexFill,
} from 'ng-apexcharts';

// ── Interfaces ─────────────────────────────────────────────────────────────
export interface BarItem {
  label: string;
  value: number;
}

export interface KpiCard {
  icon: string;
  value: string;
  label: string;
  sub: string;
  color: string;
  iconBg: string;
}

// ── Chart option shapes ────────────────────────────────────────────────────
export interface DonutOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
}

export interface BarOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  // ── Raw survey data ──────────────────────────────────────────────────────
  readonly totalEncuestados = 41;

  readonly q1 = { si: 38, no: 3 };

  readonly q2: BarItem[] = [
    { label: 'Malos olores',          value: 20 },
    { label: 'Insectos o roedores',   value: 14 },
    { label: 'Problemas entre vecinos', value: 5 },
    { label: 'Ninguno',               value: 2 },
  ];

  readonly q3: BarItem[] = [
    { label: 'Falta de cultura ciudadana',         value: 25 },
    { label: 'No respetar horarios de recolección', value: 22 },
    { label: 'Falta de educación ambiental',        value: 18 },
    { label: 'Falta de control de autoridades',     value: 12 },
  ];

  readonly q4 = { si: 14, no: 11, aveces: 16 };

  readonly openResponses: string[] = [
    'Mayor educación ambiental',
    'Más campañas de reciclaje',
    'Mayor control de las autoridades',
    'Mejor cultura ciudadana',
    'Respetar horarios de recolección',
    'Más participación comunitaria',
    'Puntos de recolección cercanos',
    'Multas por mal manejo de residuos',
    'Talleres en colegios',
    'Campañas en redes sociales',
    'Convenios con empresas recicladoras',
    'Compromiso de los líderes locales',
  ];

  // ── KPI cards ────────────────────────────────────────────────────────────
  readonly kpiCards: KpiCard[] = [
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
      value: String(this.totalEncuestados),
      label: 'Total encuestados',
      sub: 'Participantes del estudio',
      color: 'text-green-700',
      iconBg: 'bg-green-100 text-green-700',
    },
    {
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      value: this.q2.reduce((a, b) => a.value >= b.value ? a : b).label,
      label: 'Problema más reportado',
      sub: `${this.q2.reduce((a, b) => a.value >= b.value ? a : b).value} de ${this.totalEncuestados} encuestados`,
      color: 'text-orange-600',
      iconBg: 'bg-orange-100 text-orange-600',
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      value: this.q3.reduce((a, b) => a.value >= b.value ? a : b).label.split(' ').slice(0, 3).join(' '),
      label: 'Principal causa identificada',
      sub: `${this.q3.reduce((a, b) => a.value >= b.value ? a : b).value} de ${this.totalEncuestados} encuestados`,
      color: 'text-red-600',
      iconBg: 'bg-red-100 text-red-600',
    },
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      value: Math.round((this.q4.si / this.totalEncuestados) * 100) + ' %',
      label: 'Hogares que separan residuos',
      sub: `Responden "Sí" — ${this.q4.si} de ${this.totalEncuestados} encuestados`,
      color: 'text-blue-600',
      iconBg: 'bg-blue-100 text-blue-600',
    },
  ];

  // ── Chart options ─────────────────────────────────────────────────────────
  chartQ1!: DonutOptions;
  chartQ2!: BarOptions;
  chartQ3!: BarOptions;
  chartQ4!: DonutOptions;

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.chartQ1 = this.buildDonut(
      [this.q1.si, this.q1.no],
      ['Sí', 'No'],
      ['#2e7d32', '#e0e0e0'],
      'Pregunta 1',
    );
    this.chartQ2 = this.buildHorizontalBar();
    this.chartQ3 = this.buildVerticalBar();
    this.chartQ4 = this.buildDonut(
      [this.q4.si, this.q4.aveces, this.q4.no],
      ['Sí', 'A veces', 'No'],
      ['#2e7d32', '#f59e0b', '#ef4444'],
      'Pregunta 4',
    );
  }

  private buildDonut(
    series: number[],
    labels: string[],
    colors: string[],
    id: string,
  ): DonutOptions {
    return {
      series,
      chart: { type: 'donut', height: 280, id, animations: { enabled: true, speed: 800 } },
      labels,
      colors,
      legend: { position: 'bottom', fontFamily: 'inherit', fontSize: '13px' },
      dataLabels: { enabled: true, style: { fontFamily: 'inherit', fontSize: '12px' } },
      stroke: { width: 2, colors: ['#ffffff'] },
      fill: { type: 'solid' },
      plotOptions: {
        pie: {
          donut: {
            size: '62%',
            labels: {
              show: true,
              total: { show: true, label: 'Total', fontFamily: 'inherit', color: '#374151' },
            },
          },
        },
      },
      tooltip: { style: { fontFamily: 'inherit' } },
    };
  }

  private buildHorizontalBar(): BarOptions {
    return {
      series: [{ name: 'Respuestas', data: this.q2.map(d => d.value) }],
      chart: {
        type: 'bar', height: 260,
        toolbar: { show: false },
        animations: { enabled: true, speed: 800 },
      },
      plotOptions: { bar: { horizontal: true, borderRadius: 6, barHeight: '60%' } },
      xaxis: { categories: this.q2.map(d => d.label), labels: { style: { fontFamily: 'inherit', fontSize: '12px' } } },
      yaxis: { labels: { style: { fontFamily: 'inherit', fontSize: '12px' } } },
      colors: ['#2e7d32'],
      dataLabels: { enabled: true, style: { fontFamily: 'inherit', fontSize: '11px' } },
      tooltip: { style: { fontFamily: 'inherit' } },
    };
  }

  private buildVerticalBar(): BarOptions {
    return {
      series: [{ name: 'Respuestas', data: this.q3.map(d => d.value) }],
      chart: {
        type: 'bar', height: 280,
        toolbar: { show: false },
        animations: { enabled: true, speed: 800 },
      },
      plotOptions: { bar: { horizontal: false, borderRadius: 6, columnWidth: '55%' } },
      xaxis: {
        categories: this.q3.map(d => d.label),
        labels: { style: { fontFamily: 'inherit', fontSize: '11px' }, rotate: -15, trim: true },
      },
      yaxis: { labels: { style: { fontFamily: 'inherit', fontSize: '12px' } } },
      colors: ['#388e3c', '#66bb6a', '#2e7d32', '#a5d6a7'],
      dataLabels: { enabled: true, style: { fontFamily: 'inherit', fontSize: '11px' } },
      tooltip: { style: { fontFamily: 'inherit' } },
    };
  }
}
