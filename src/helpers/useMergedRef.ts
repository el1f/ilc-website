// https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-merged-ref/use-merged-ref.ts

import React, { useCallback } from "react";

type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.ForwardedRef<T>;

export function assignRef<T = any>(
	ref: React.ForwardedRef<T> | React.MutableRefObject<T>,
	value: T | null,
) {
	if (typeof ref === "function") {
		ref(value);
	} else if (typeof ref === "object" && ref !== null && "current" in ref) {
		// eslint-disable-next-line no-param-reassign
		ref.current = value;
	}
}

export function mergeRefs<T = any>(...refs: Ref<T>[]) {
	return (node: T | null) => {
		refs.forEach((ref) => {
			if (typeof ref === "object") assignRef(ref, node);
		});
	};
}

export function useMergedRef<T = any>(...refs: Ref<T>[]) {
	return useCallback(mergeRefs(...refs), refs);
}
