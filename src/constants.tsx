const baseUrl = import.meta.env.VITE_BASE_URL;

export default baseUrl;

export type IRow = {
  email: string;
  backupEmail: string;
  name: string;
  institution: string;
  tumorClass: string;
  anatomicalLocation: string;
  histologicalDiagnosis: string;
  genetics: string;
  methylationCluster: string;
  evidence: string;
  comment: string;
};
