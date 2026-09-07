export const useSheetData = (sheet) => {
	const config = useRuntimeConfig()

	return useAsyncData(
		`sheet-${sheet}`,

		async () => {
			const range = encodeURIComponent(`${sheet}!A:Z`)

			const url =
				`https://sheets.googleapis.com/v4/spreadsheets/` +
				`${config.public.gsSpreadsheetId}/values/${range}` +
				`?key=${config.public.gsApiKey}`

			const response = await $fetch(url)

			const rows = response.values || []

			if (!rows.length) {
				return []
			}

			const [headers, ...dataRows] = rows

			return dataRows.map((row) => {
				return headers.reduce((result, header, index) => {
					result[header.trim()] = row[index] ?? ''

					return result
				}, {})
			})
		},

		{
			server: false,
			default: () => [],
		},
	)
}