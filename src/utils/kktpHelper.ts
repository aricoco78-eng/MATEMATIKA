export type KktpPresetId = '69' | '75';

export type KktpTierKey = 'perlu_bimbingan' | 'cukup' | 'baik' | 'sangat_baik';

export interface KktpIntervalTier {
  key: KktpTierKey;
  label: 'Perlu Bimbingan' | 'Cukup' | 'Baik' | 'Sangat Baik';
  min: number;
  max: number;
  rangeLabel: string;
  isPass: boolean;
  tindakLanjut: string;
  badgeClass: string;
}

const STORAGE_KKTP_PRESET_KEY = 'sd1_kktp_preset_v1';

export function getKktpPreset(): KktpPresetId {
  try {
    const saved = localStorage.getItem(STORAGE_KKTP_PRESET_KEY);
    if (saved === '75' || saved === '69') {
      return saved;
    }
  } catch {
    // fallback
  }
  return '69';
}

export function setKktpPreset(preset: KktpPresetId): void {
  try {
    localStorage.setItem(STORAGE_KKTP_PRESET_KEY, preset);
  } catch {
    // ignore
  }
}

export function getActiveKktpThreshold(preset?: KktpPresetId): number {
  const active = preset || getKktpPreset();
  return active === '75' ? 75 : 69;
}

export function getKktpIntervals(preset?: KktpPresetId): KktpIntervalTier[] {
  const active = preset || getKktpPreset();
  const threshold = active === '75' ? 75 : 69;
  const pbMax = threshold - 1; // 68 atau 74

  return [
    {
      key: 'perlu_bimbingan',
      label: 'Perlu Bimbingan',
      min: 0,
      max: pbMax,
      rangeLabel: `0–${pbMax}`,
      isPass: false,
      tindakLanjut: 'Belum mencapai ketuntasan, perlu remedial di seluruh atau sebagian bagian.',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-200',
    },
    {
      key: 'cukup',
      label: 'Cukup',
      min: threshold,
      max: 78,
      rangeLabel: `${threshold}–78`,
      isPass: true,
      tindakLanjut: 'Sudah mencapai ketuntasan minimal, perlu penguatan pada beberapa indikator.',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      key: 'baik',
      label: 'Baik',
      min: 79,
      max: 89,
      rangeLabel: '79–89',
      isPass: true,
      tindakLanjut: 'Sudah mencapai ketuntasan dengan baik, tidak perlu remedial.',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      key: 'sangat_baik',
      label: 'Sangat Baik',
      min: 90,
      max: 100,
      rangeLabel: '90–100',
      isPass: true,
      tindakLanjut: 'Sudah mencapai ketuntasan secara optimal, perlu pengayaan atau tantangan lebih.',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
  ];
}

export function getKktpClassification(nilai: number, preset?: KktpPresetId): KktpIntervalTier {
  const score = Number(nilai) || 0;
  const tiers = getKktpIntervals(preset);

  if (score >= 90) return tiers[3];
  if (score >= 79) return tiers[2];
  if (score >= tiers[1].min) return tiers[1];
  return tiers[0];
}

export function isNilaiLulus(nilai: number, preset?: KktpPresetId): boolean {
  return (Number(nilai) || 0) >= getActiveKktpThreshold(preset);
}
