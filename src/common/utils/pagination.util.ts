export interface PaginatedResult<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}

export async function paginate<T>(
    model: any,
    page: number,
    limit: number,
    orderBy: object = { id: 'asc' },
): Promise<PaginatedResult<T>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        model.findMany({
            skip,
            take: limit,
            orderBy,
        }),
        model.count(),
    ]);

    return {
        data,
        total,
        page,
        limit,
    };
}
