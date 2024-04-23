type FeeLimit = { percent: string } | { fixed: string };

export interface AdditionalOutput {
    address: string;
    amount: string;
    satAmount: string | number;
}

export default interface TransactionRequest {
    target_conf?: number | null; // optional
    addr?: string;
    sat_per_byte?: string | null; // optional
    sat_per_vbyte?: string | null; // optional
    amount?: string;
    utxos?: string[];
    conf_target?: number;
    spend_unconfirmed?: boolean;
    send_all?: boolean;
    account?: string;
    additional_outputs: Array<AdditionalOutput>;
}

export type SendPaymentRequest =
    | {
          payment_request: string;
          amt?: string;
          fee_limit?: FeeLimit;
      }
    | {
          dest_string: string;
          amt: string;
          final_cltv_delta: string;
          payment_hash_string: string;
          fee_limit?: FeeLimit;
      };
