
// Card types
export interface Card {
  id: string | number;
  title: string;
  description?: string;
  bg?: string;
}

export interface HorizontalCardsProps {
  cards?: Card[];
}

// Breakdown types
export type BreakDownProp = {
  activeBookmarkId: string | null;
};

// Chat types
export type ChatBodyProps = {
  onAnalyze: (text: string) => void;
};


// API types
export type Data = {
  name: string;
};