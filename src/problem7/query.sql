/***
 This solution uses a subquery in the FROM clause. 
 Such an approach may be suboptimal or less efficient. 
 Given more time, we should explore for ways to convert 
 it to use a Joins solution instead.
 
 https://www.navicat.com/en/company/aboutus/blog/1704-joins-versus-subqueries-which-is-faster
 ***/

SELECT
    accounts.address
FROM
    (
        -- Subquery for calculating totalbalance of all accounts
        SELECT
            address,
            SUM(
                CASE
                    WHEN denom = 'usdc' THEN amount * 0.000001
                    WHEN denom = 'swth' THEN amount * 0.00000005
                    WHEN denom = 'tmz' THEN amount * 0.003
                END
            ) AS totalbalance
        FROM
            balances
        GROUP BY
            address
    ) AS accounts
WHERE
    -- Filter for accounts >=$500 and made recent trades (>730000)
    accounts.totalbalance >= 500
    AND accounts.address IN (
        -- Subquery for finding the addresses of all recent trades 
        SELECT
            address
        FROM
            trades
        WHERE
            block_height > 730000
    )