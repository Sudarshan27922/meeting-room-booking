interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    onClear?: () => void;
    onSearch?: () => void;
    autoFocus?: boolean;
}

export type { SearchBarProps };